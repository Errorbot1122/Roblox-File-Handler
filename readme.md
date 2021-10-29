## Functions

<dl>
<dt><a href="#isXMLTag">isXMLTag(xml_Tag)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if the xml_Tag is the parse-able/parsed XML Tag</p>
</dd>
<dt><a href="#isItem">isItem(item)</a> ⇒ <code>Boolean</code></dt>
<dd><p>check if the item is the Item type</p>
</dd>
<dt><a href="#convertValidInstance">convertValidInstance(instance)</a> ⇒ <code>Instance</code></dt>
<dd><p>converts a referent id, item, or</p>
</dd>
<dt><a href="#findFirstItemByClassName">findFirstItemByClassName(itemList, className, parent)</a> ⇒ <code>null</code> | <code>Item</code></dt>
<dd><p>Finds the first instance in &#39;itemList&#39; with the same class as &#39;className&#39;</p>
</dd>
<dt><a href="#convertItemToInstance">convertItemToInstance(item, parent, options)</a> ⇒ <code>Instance</code> | <code>Item</code></dt>
<dd></dd>
</dl>

<a name="isXMLTag"></a>

## isXMLTag(xml_Tag) ⇒ <code>Boolean</code>
Check if the xml_Tag is the parse-able/parsed XML Tag

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| xml_Tag | <code>\*</code> | The object to check |

<a name="isItem"></a>

## isItem(item) ⇒ <code>Boolean</code>
check if the item is the Item type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>\*</code> | The object to check |

<a name="convertValidInstance"></a>

## convertValidInstance(instance) ⇒ <code>Instance</code>
converts a referent id, item, or

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| instance | <code>String</code> \| <code>Item</code> \| <code>Instance</code> | the instance you want to convert |

<a name="findFirstItemByClassName"></a>

## findFirstItemByClassName(itemList, className, parent) ⇒ <code>null</code> \| <code>Item</code>
Finds the first instance in 'itemList' with the same class as 'className'

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemList | <code>Array.&lt;Item&gt;</code> | A list of Item objects |
| className | <code>String</code> | The name of the className |
| parent | <code>String</code> \| <code>Item</code> \| <code>Instance</code> | The item's parent |

<a name="convertItemToInstance"></a>

## convertItemToInstance(item, parent, options) ⇒ <code>Instance</code> \| <code>Item</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Item</code> | The Item you want convert |
| parent | <code>String</code> \| <code>Item</code> \| <code>Instance</code> | The item's parent |
| options | <code>Object</code> | extra options |

<a name="InputType"></a>

## InputType : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| NoInput | <code>Number</code> | <code>0</code> | Behaves like a weld, and does absolutely nothing. |
| Constant | <code>Number</code> | <code>12</code> | Rotate at a constant velocity of BasePart ParamB. |
| Sin | <code>Number</code> | <code>13</code> | Rotate at a velocity of: |

<a name="Material"></a>

## Material : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Plastic | <code>Number</code> | <code>256</code> | Applies to BasPart only. |
| Wood | <code>Number</code> | <code>512</code> | Applies to BasPart only. |
| Slate | <code>Number</code> | <code>800</code> | Applies to BasPart and Terrain. |
| Concrete | <code>Number</code> | <code>816</code> | Applies to BasPart and Terrain. |
| CorrodedMetal | <code>Number</code> | <code>1040</code> | Applies to BasPart only. |
| DiamondPlate | <code>Number</code> | <code>1056</code> | Applies to BasPart only. |
| Foil | <code>Number</code> | <code>1072</code> | Applies to BasPart only. |
| Grass | <code>Number</code> | <code>1280</code> | Applies to BasPart and Terrain. |
| Ice | <code>Number</code> | <code>1536</code> | Applies to BasPart and Terrain. |
| Marble | <code>Number</code> | <code>784</code> | Applies to BasPart only. |
| Granite | <code>Number</code> | <code>832</code> | Applies to BasPart only. |
| Brick | <code>Number</code> | <code>848</code> | Applies to BasPart and Terrain. |
| Pebble | <code>Number</code> | <code>864</code> | Applies to BasPart only. |
| Sand | <code>Number</code> | <code>1296</code> | Applies to BasPart and Terrain. |
| Fabric | <code>Number</code> | <code>1312</code> | Applies to BasPart only. |
| SmoothPlastic | <code>Number</code> | <code>272</code> | Applies to BasPart only. |
| Metal | <code>Number</code> | <code>1088</code> | Applies to BasPart only. |
| WoodPlanks | <code>Number</code> | <code>528</code> | Applies to BasPart and Terrain. |
| Cobblestone | <code>Number</code> | <code>880</code> | Applies to BasPart and Terrain. |
| Air | <code>Number</code> | <code>1792</code> | Applies to Terrain only. |
| Water | <code>Number</code> | <code>2048</code> | Applies to Terrain only. |
| Rock | <code>Number</code> | <code>896</code> | Applies to Terrain only. |
| Glacier | <code>Number</code> | <code>1552</code> | Applies to Terrain only. |
| Snow | <code>Number</code> | <code>1328</code> | Applies to Terrain only. |
| Sandstone | <code>Number</code> | <code>912</code> | Applies to Terrain only. |
| Mud | <code>Number</code> | <code>1344</code> | Applies to Terrain only. |
| Basalt | <code>Number</code> | <code>788</code> | Applies to Terrain only. |
| Ground | <code>Number</code> | <code>1360</code> | Applies to Terrain only. |
| CrackedLava | <code>Number</code> | <code>804</code> | Applies to Terrain only. |
| Neon | <code>Number</code> | <code>288</code> | Applies to BasPart only. |
| Glass | <code>Number</code> | <code>1568</code> | Applies to BasPart only. |
| Asphalt | <code>Number</code> | <code>1376</code> | Applies to Terrain only. |
| LeafyGrass | <code>Number</code> | <code>1284</code> | Applies to Terrain only. |
| Salt | <code>Number</code> | <code>1392</code> | Applies to Terrain only. |
| Limestone | <code>Number</code> | <code>820</code> | Applies to Terrain only. |
| Pavement | <code>Number</code> | <code>836</code> | Applies to Terrain only. |
| ForceField | <code>Number</code> | <code>1584</code> | Applies to BasPart only; see details. https://developer.roblox.com/en-us/articles/force-field-material. |

<a name="PartType"></a>

## PartType : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Ball | <code>Number</code> | <code>0</code> | A ball shaped part |
| Block | <code>Number</code> | <code>1</code> | A block shaped part |
| Cylinder | <code>Number</code> | <code>2</code> | A cylinder shaped part |

<a name="SurfaceType"></a>

## SurfaceType : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Smooth | <code>Number</code> | <code>0</code> | Makes the side appear without any surface detail (except for outlines) |
| Glue | <code>Number</code> | <code>1</code> | Makes the side appear with thick diagonal "X"s |
| Weld | <code>Number</code> | <code>2</code> | Makes the side appear with thick diagonal "X"s |
| Studs | <code>Number</code> | <code>3</code> | Makes the side appear with square studs |
| Inlet | <code>Number</code> | <code>4</code> | Makes the side appear with holes where studs would be |
| Universal | <code>Number</code> | <code>5</code> | Makes the side appear with both Studs and Inlets in a checker pattern |
| Hinge | <code>Number</code> | <code>6</code> | Makes the side appear with a yellow hinge. Any part connected to this hinge will stick to the side and rotate using physics, however, using HingeConstraint to join parts is preferred |
| Motor | <code>Number</code> | <code>7</code> | Acts the same as a Hinge, but has a grey ring around it and automatically rotates any part connected to it, however, using HingeConstraint to join parts is preferred |
| SteppingMotor | <code>Number</code> | <code>8</code> | Functions identically to a motor. It may have functioned differently in the past, but that functionality no longer seems to exist |
| SmoothNoOutlines | <code>Number</code> | <code>10</code> | Same as Smooth, but removes the outlines of the surface |

