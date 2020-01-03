﻿using DCL.Components;
using DCL.Controllers;
using DCL.Helpers;
using DCL.Models;
using System.Collections;
using UnityEngine;

namespace DCL
{
    public class UUIDComponent<ModelType> : UUIDComponent where ModelType : UUIDComponent.Model, new()
    {
        new public ModelType model
        {
            get { return base.model as ModelType; }
            set { base.model = value; }
        }
    }

    public class UUIDComponent : BaseComponent
    {
        [System.Serializable]
        public class Model
        {
            public string type;
            public string uuid;
        }

        public Model model = new Model();

        public virtual void Setup(ParcelScene scene, DecentralandEntity entity, UUIDComponent.Model model)
        {
        }

        public void SetForEntity(ParcelScene scene, DecentralandEntity entity, UUIDComponent.Model model)
        {
            switch (model.type)
            {
                case OnClick.NAME:
                    SetUpComponent<OnClick>(scene, entity, model);
                    return;
                case OnPointerDown.NAME:
                    SetUpComponent<OnPointerDown>(scene, entity, model);
                    return;
                case OnPointerUp.NAME:
                    SetUpComponent<OnPointerUp>(scene, entity, model);
                    return;
            }

            Debug.LogWarning($"Cannot create UUIDComponent of type '{model.type}'.");
        }

        public void RemoveFromEntity(DecentralandEntity entity, string type)
        {
            switch (type)
            {
                case OnClick.NAME:
                    RemoveComponent<OnClick>(entity);
                    break;
                case OnPointerDown.NAME:
                    RemoveComponent<OnPointerDown>(entity);
                    break;
                case OnPointerUp.NAME:
                    RemoveComponent<OnPointerUp>(entity);
                    break;
            }

            Debug.LogWarning($"Cannot remove UUIDComponent of type '{type}'.");
        }

        protected virtual void RemoveComponent<T>(DecentralandEntity entity) where T : UUIDComponent
        {
            var currentComponent = entity.gameObject.GetComponent<T>();

            if (currentComponent != null)
            {
#if UNITY_EDITOR
                UnityEngine.Object.DestroyImmediate(currentComponent);
#else
                UnityEngine.Object.Destroy(currentComponent);
#endif
            }
        }

        private void SetUpComponent<T>(ParcelScene scene, DecentralandEntity entity, UUIDComponent.Model model)
            where T : UUIDComponent
        {
            var currentComponent = entity.gameObject.GetOrCreateComponent<T>();

            currentComponent.Setup(scene, entity, model);
        }

        public override IEnumerator ApplyChanges(string newJson)
        {
            model = SceneController.i.SafeFromJson<Model>(newJson);

            if (!string.IsNullOrEmpty(model.uuid))
            {
                SetForEntity(scene, entity, model);
            }

            return null;
        }
    }
}