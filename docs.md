
# Documentation
This is all the full on documentation for Roblox File Handler

## Table Of Contents

* [Functions](#functions)
    * [**`isXMLTag( xml_Tag )`:**  *`Boolean`* ](#isXMLTag)
    * [**`isItem( item )`:**  *`Boolean`* ](#isItem)
    * [**`convertValidInstance( instance )`:**  *`Instance`* ](#convertValidInstance)
    * [**`findFirstItemByClassName( itemList  className  parent )`:**  *`null`*  *`Item`* ](#findFirstItemByClassName)
    * [**`convertItemToInstance( item  parent  options )`:**  *`Instance`*  *`Item`* ](#convertItemToInstance)

## <a name='functions'> Functions </a> 

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

