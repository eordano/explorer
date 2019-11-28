﻿using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using UnityEngine;

[assembly: InternalsVisibleTo("AvatarEditorHUDTests")]
public class ItemSelector : MonoBehaviour
{
    [SerializeField]
    private ItemToggleFactory itemToggleFactory;

    [SerializeField]
    private RectTransform itemContainer;

    public event System.Action<string> OnItemClicked;

    internal Dictionary<string, ItemToggle> itemToggles = new Dictionary<string, ItemToggle>();

    private string currentBodyShape;

    private void Awake()
    {
        Application.quitting += () =>
        {
            OnItemClicked = null;
        };
    }

    public void AddItemToggle(WearableItem item)
    {
        if (item == null) return;
        if (itemToggles.ContainsKey(item.id)) return;

        ItemToggle newToggle;
        if (item.IsCollectible())
        {
            newToggle = itemToggleFactory.CreateItemToggleFromType(WearableLiterals.Tags.EXCLUSIVE, itemContainer); // TODO: use enum
            newToggle.transform.SetAsFirstSibling();
        }
        else
        {
            newToggle = itemToggleFactory.CreateItemToggleFromType(WearableLiterals.Tags.BASE_WEARABLE, itemContainer);
        }

        newToggle.Initialize(item, false);
        newToggle.OnClicked += ToggleClicked;
        itemToggles.Add(item.id, newToggle);

        bool active = string.IsNullOrEmpty(currentBodyShape) || item.SupportsBodyShape(currentBodyShape);
        newToggle.gameObject.SetActive(active);
    }

    public void RemoveItemToggle(string itemID)
    {
        if (string.IsNullOrEmpty(itemID)) return;

        ItemToggle toggle = GetItemToggleByID(itemID);
        if (toggle == null) return;

        itemToggles.Remove(itemID);
        Destroy(toggle.gameObject);
    }

    public void RemoveAllItemToggle()
    {
        var gameObjects = itemToggles.Values.Select(x => x.gameObject).ToArray();
        itemToggles.Clear();
        for (var i = gameObjects.Length - 1; i >= 0; i--)
        {
            Destroy(gameObjects[i]);
        }
    } 

    public void SetBodyShape(string bodyShape)
    {
        if (currentBodyShape == bodyShape) return;

        currentBodyShape = bodyShape;
        ShowCompatibleWithBodyShape();
    }

    private void ShowCompatibleWithBodyShape()
    {
        using (Dictionary<string, ItemToggle>.Enumerator iterator = itemToggles.GetEnumerator())
        {
            while (iterator.MoveNext())
            {
                ItemToggle current = iterator.Current.Value;
                bool active = current.wearableItem.SupportsBodyShape(currentBodyShape);
                current.gameObject.SetActive(active);
            }
        }
    }

    public void Select(string itemID)
    {
        ItemToggle toggle = GetItemToggleByID(itemID);
        if(toggle != null)
            toggle.selected = true;
    }

    public void Unselect(string itemID)
    {
        ItemToggle toggle = GetItemToggleByID(itemID);
        if(toggle != null)
            toggle.selected = false;
    }

    public void UnselectAll()
    {
        using (var iterator = itemToggles.GetEnumerator())
        {
            while (iterator.MoveNext())
            {
                iterator.Current.Value.selected = false;
            }
        }
    }

    private void ToggleClicked(ItemToggle toggle)
    {
        OnItemClicked?.Invoke(toggle.wearableItem.id);
    }

    private ItemToggle GetItemToggleByID(string itemID)
    {
        if (string.IsNullOrEmpty(itemID)) return null;
        return itemToggles.ContainsKey(itemID) ? itemToggles[itemID] : null;
    }
}