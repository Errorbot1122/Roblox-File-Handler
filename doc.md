
# Documentation
This is all the full on documentation for Roblox File Handler

## Table Of Contents

* [Classes](#classes)
    * [**`BasePart()`:** ](#BasePart)
* [Functions](#functions)
    * [**`reMap( n  start  stop  newStart  newStop  withinBounds )`:**  *`Number`* ](#reMap)
    * [**`lerp( start  end  amt )`:**  *`Number`* ](#lerp)
    * [**`toBytesInt32( num )`:** ](#toBytesInt32)
    * [**`isXMLTag( xml_Tag )`:**  *`Boolean`* ](#isXMLTag)
    * [**`isItem( item )`:**  *`Boolean`* ](#isItem)
    * [**`convertValidInstance( instance )`:**  *`Instance`* ](#convertValidInstance)
    * [**`findFirstItemByClassName( itemList  className  parent )`:**  *`null`*  *`Item`* ](#findFirstItemByClassName)
    * [**`convertItemToInstance( item  parent  options )`:**  *`Instance`*  *`Item`* ](#convertItemToInstance)
    * [**`Instance#ClearAllChildren()`:** ](#Instance#ClearAllChildren)
    * [**`Instance#Clone()`:** ](#Instance#Clone)
    * [**`Instance#GetDescendants()`:** ](#Instance#GetDescendants)
    * [**`Instance#IsDescendantOf( ancestor )`:**  *`Boolean`* ](#Instance#IsDescendantOf)
    * [**`BaseVector#lerp( values2  amt )`:**  *`BaseVector`* ](#BaseVector#lerp)
    * [**`CFrame#_setXYZFromVector3( v3  type )`:** ](#CFrame#_setXYZFromVector3)

## <a name='functions'> Functions </a> 

### <a name='reMap'> **`reMap( n  start  stop  newStart  newStop  withinBounds )`:**  *`Number`* </a>

Maps a given range from a specific iterator to a new range.

Credit to RoyallyFlushed (https://www.roblox.com/users/profile?username&#x3D;RoyallyFlushed) for the code!!! [https://devforum.roblox.com/t/lua-map-command/215342]

**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `n` |  *`Number`* | The number you want to map | | `start` |  *`Number`* | The starting number of the original range | | `stop` |  *`Number`* | The ending number of the original range | | `newStart` |  *`Number`* | The starting number of the new range | | `newStop` |  *`Number`* | The ending number of the new range | | `withinBounds` |  *`Boolean`* | Is forced to be inbetween the new range or not. [Defult: false] | 

**Returns**: `Number` 

### <a name='lerp'> **`lerp( start  end  amt )`:**  *`Number`* </a>

returns the interpolated version inputed range by an amount between 0 and 1. (can go above or below 0 - 1, but not recommended)

**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `start` |  *`Number`* | The starting number in the range. | | `end` |  *`Number`* | The ending number in the range. | | `amt` |  *`Number`* | the amount you want to interpolate between 0 and 1. (can go above or below 0 - 1, but not recommended) | 

**Returns**: `Number` 

### <a name='toBytesInt32'> **`toBytesInt32( num )`:** </a>



**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `num` |  *`Number`* | the number you want to convert | 

**Returns**: 

### <a name='isXMLTag'> **`isXMLTag( xml_Tag )`:**  *`Boolean`* </a>

Check if the xml_Tag is the parse-able/parsed XML Tag

**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `xml_Tag` |  *`*`* | The object to check | 

**Returns**: `Boolean` 

### <a name='isItem'> **`isItem( item )`:**  *`Boolean`* </a>

check if the item is the Item type

**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `item` |  *`*`* | The object to check | 

**Returns**: `Boolean` 

### <a name='convertValidInstance'> **`convertValidInstance( instance )`:**  *`Instance`* </a>

converts a referent id, item, or

**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `instance` |  *`String`*  *`Item`*  *`Instance`* | the instance you want to convert | 

**Returns**: `Instance` 

### <a name='findFirstItemByClassName'> **`findFirstItemByClassName( itemList  className  parent )`:**  *`null`*  *`Item`* </a>

Finds the first instance in &#x27;itemList&#x27; with the same class as &#x27;className&#x27;

**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `itemList` |  *`Array.&lt;Item&gt;`* | A list of Item objects | | `className` |  *`String`* | The name of the className | | `parent` |  *`String`*  *`Item`*  *`Instance`* | The item&#x27;s parent | 

**Returns**: `null` `Item` 

### <a name='convertItemToInstance'> **`convertItemToInstance( item  parent  options )`:**  *`Instance`*  *`Item`* </a>



**Kind**: global, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `item` |  *`Item`* | The Item you want convert | | `parent` |  *`String`*  *`Item`*  *`Instance`* | The item&#x27;s parent | | `options` |  *`Object`* | extra options | 

**Returns**: `Instance` `Item` 

### <a name='Instance#ClearAllChildren'> **`Instance#ClearAllChildren()`:** </a>

This function destroys all of an Instance’s children.

**Kind**: instance, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |


**Returns**: 

### <a name='Instance#Clone'> **`Instance#Clone()`:** </a>

Create a copy of an object and all its descendants, ignoring objects that are not Archivable

**Kind**: instance, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |


**Returns**: 

### <a name='Instance#GetDescendants'> **`Instance#GetDescendants()`:** </a>

The GetDescendants function of an object returns an array that contains all of the descendants of that object. Unlike Instance:GetChildren, which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on and so forth.

**Kind**: instance, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |


**Returns**: 

### <a name='Instance#IsDescendantOf'> **`Instance#IsDescendantOf( ancestor )`:**  *`Boolean`* </a>



**Kind**: instance, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `ancestor` |  *`Instance`* | The ancestor Instance. | 

**Returns**: `Boolean` 

### <a name='BaseVector#lerp'> **`BaseVector#lerp( values2  amt )`:**  *`BaseVector`* </a>



**Kind**: instance, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `values2` |  *`Number`* |  | | `amt` |  *`Number`* |  | 

**Returns**: `BaseVector` 

### <a name='CFrame#_setXYZFromVector3'> **`CFrame#_setXYZFromVector3( v3  type )`:** </a>



**Kind**: instance, *function*

| Name | Type(s) | Description |
| :---: | :---: | :---: |
| `v3` |  *`Vector3`* | Abrv fo Vector3 | | `type` |  *`Number`*  *`String`* | 0 &#x3D; XYZ, 1 &#x3D; RightVector, 2 &#x3D; UpVector, 3 &#x3D; LookVector, 4 &#x3D; XVector, 5 &#x3D; YVector, 6 &#x3D; ZVector | 

**Returns**: 

