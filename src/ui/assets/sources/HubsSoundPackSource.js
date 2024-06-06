import AssetManifestSource from "../AssetManifestSource";

export default class HubsSoundPackSource extends AssetManifestSource {
  constructor(editor) {
    //super(editor, "Hubs Sound Pack", "https://assets-prod.reticulum.io/hubs-sound-pack/asset-manifest.json");
    super(editor, "Hubs Sound Pack", "https://s3.amazonaws.com/animationnights.media/annyxr/hcce/asset-manifest.json");
  }
}
