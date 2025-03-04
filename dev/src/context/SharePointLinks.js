import { Icons } from "../components/icons/index";

export class Link{
    constructor(t,d,i,u,g=1){
      this.Title = t
      this.Description = d
      this.Icon = i
      this.URL = u
      this.Grade = g
    }
  }
export const SharePointLinks=[
  new Link(
    'Marketing',
    'Digital copies of our brochures, Linked In banners, Images of installs and more.',
    Icons.obj.Scales.element,
    'https://davidphillipsgroup.sharepoint.com/SPOMarketing'
  ),
  new Link(
    'Projects',
    'All files portaining to Project development and contracting.',
    Icons.obj.CriticalPath.element,
    'https://davidphillipsgroup.sharepoint.com/SPOProjects'
  ),
  new Link(
    'Inventory',
    'All files portaining to Inventory managment.',
    Icons.obj.Boxes.element,
    'https://davidphillipsgroup.sharepoint.com/SPOInventory%20Portal'
  ),
  new Link(
    'Product',
    'All files portaining to product.',
    Icons.obj.FabricOptions.element,
    'https://davidphillipsgroup.sharepoint.com/SPOInventory%20Portal/Forms/AllItems.aspxhttps://davidphillipsgroup.sharepoint.com/SPOProjects'
  ),
]