﻿using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using DCL.Configuration;

namespace DCL.Helpers
{
    public class VisualTestHelpers
    {
        public static IEnumerator TakeSnapshot(string snapshotPath, string snapshotName, Camera camera, int width, int height)
        {
#if UNITY_EDITOR
            if (string.IsNullOrEmpty(snapshotPath) || string.IsNullOrEmpty(snapshotName) || camera == null)
            {
                Debug.Log("snapshot path or camera is not valid. Snapshot aborted.");

                yield break;
            }

            QualitySettings.SetQualityLevel((int)QualityLevel.Good, true);

            string finalPath = snapshotPath + snapshotName;
            float fileProcessStartingTime;

            if (File.Exists(finalPath))
            {
                File.Delete(finalPath);

                // Just in case, wait until the file is deleted
                fileProcessStartingTime = Time.time;
                while (File.Exists(finalPath) && (Time.time - fileProcessStartingTime) < 10)
                {
                    yield return new WaitForEndOfFrame();
                }
            }

            // We should only read the screen buffer after rendering is complete
            yield return new WaitForEndOfFrame();

            RenderTexture renderTexture = new RenderTexture(width, height, 24);
            camera.targetTexture = renderTexture;
            camera.Render();

            RenderTexture.active = renderTexture;
            Texture2D currentSnapshot = new Texture2D(width, height, TextureFormat.RGB24, false);
            currentSnapshot.ReadPixels(new Rect(0, 0, width, height), 0, 0);
            currentSnapshot.Apply();

            yield return new WaitForEndOfFrame();

            if (!Directory.Exists(snapshotPath))
            {
                Directory.CreateDirectory(snapshotPath);
            }

            byte[] bytes = currentSnapshot.EncodeToPNG();
            File.WriteAllBytes(finalPath, bytes);

            Debug.Log("saved snapshot in " + finalPath);

            // Just in case, wait until the file is created
            fileProcessStartingTime = Time.time;
            while (!File.Exists(finalPath) && (Time.time - fileProcessStartingTime) < 10)
            {
                yield return new WaitForEndOfFrame();
            }

            RenderTexture.active = null;
            renderTexture.Release();

            // AssetDatabase.Refresh();
#else
            yield break;
#endif
        }

        public static float GetImageAffinityPercentage(Texture2D baselineImage, Texture2D testImage, string diffImagePath)
        {
            baselineImage = DuplicateTextureAsReadable(baselineImage);
            testImage = DuplicateTextureAsReadable(testImage);

            if (string.IsNullOrEmpty(diffImagePath))
            {
                Debug.Log("diff image path is not valid. Image affinity percentage check aborted.");

                return -1;
            }

            if (baselineImage.width != testImage.width || baselineImage.height != testImage.height)
            {
                Debug.Log("CAN'T COMPARE IMAGES WITH DIFFERENT DIMENSIONS:");
                Debug.Log("baseline image dimensions: " + baselineImage.width + "," + baselineImage.height);
                Debug.Log("test image dimensions: " + testImage.width + "," + testImage.height);

                return -1;
            }

            Color32[] baselineImagePixels = baselineImage.GetPixels32();
            Color32[] testImagePixels = testImage.GetPixels32();
            Color32[] diffImagePixels = new Color32[testImagePixels.Length];
            Color32 diffColor = new Color32(255, 0, 0, 255);
            int differentPixels = 0;

            for (int i = 0; i < testImagePixels.Length; i++)
            {
                if (!IsSamePixel(testImagePixels[i], baselineImagePixels[i], TestSettings.VISUAL_TESTS_PIXELS_CHECK_THRESHOLD))
                {
                    differentPixels++;
                    diffImagePixels[i] = diffColor;
                }
                else
                {
                    diffImagePixels[i] = baselineImagePixels[i];
                }
            }

            // Calculate Image Affinity
            float imageAffinity = ((testImagePixels.Length - differentPixels) * 100) / testImagePixels.Length;

            // Save diff image
            if (imageAffinity < TestSettings.VISUAL_TESTS_APPROVED_AFFINITY)
            {
                Texture2D diffImage = new Texture2D(baselineImage.width, baselineImage.height);
                diffImage.SetPixels32(diffImagePixels);
                diffImage.Apply();
                byte[] bytes = diffImage.EncodeToPNG();
                File.WriteAllBytes(diffImagePath, bytes);
            }
            else if (File.Exists(diffImagePath))
            {
                File.Delete(diffImagePath);

                if (File.Exists(diffImagePath + ".meta"))
                    File.Delete(diffImagePath + ".meta");
            }

            return imageAffinity;
        }

        public static Texture2D DuplicateTextureAsReadable(Texture2D source)
        {
            RenderTexture renderTex = RenderTexture.GetTemporary(
                        source.width,
                        source.height,
                        0,
                        RenderTextureFormat.Default,
                        RenderTextureReadWrite.Linear);

            Graphics.Blit(source, renderTex);

            RenderTexture previous = RenderTexture.active;
            RenderTexture.active = renderTex;

            Texture2D readableText = new Texture2D(source.width, source.height);
            readableText.ReadPixels(new Rect(0, 0, renderTex.width, renderTex.height), 0, 0);
            readableText.Apply();

            RenderTexture.active = previous;
            RenderTexture.ReleaseTemporary(renderTex);

            return readableText;
        }

        public static Texture2D ResizeTexture(Texture2D source, int newWidth, int newHeight)
        {
            source.filterMode = FilterMode.Point;

            RenderTexture renderTex = RenderTexture.GetTemporary(newWidth, newHeight);

            renderTex.filterMode = FilterMode.Point;
            RenderTexture.active = renderTex;
            Graphics.Blit(source, renderTex);

            Texture2D newTex = new Texture2D(newWidth, newHeight);
            newTex.ReadPixels(new Rect(0, 0, newWidth, newWidth), 0, 0);
            newTex.Apply();

            RenderTexture.active = null;

            return newTex;
        }

        public static bool IsSamePixel(Color32 pixelA, Color32 pixelB, float checkThreshold)
        {
            return (pixelA.r > pixelB.r - checkThreshold && pixelA.r < pixelB.r + checkThreshold) &&
                    (pixelA.g > pixelB.g - checkThreshold && pixelA.g < pixelB.g + checkThreshold) &&
                    (pixelA.b > pixelB.b - checkThreshold && pixelA.b < pixelB.b + checkThreshold);
        }

        public static void RepositionVisualTestsCamera(Transform cameraTransform, Vector3 newPosition)
        {
            cameraTransform.position = newPosition;
            cameraTransform.forward = Vector3.zero - cameraTransform.position;
        }
    }
}