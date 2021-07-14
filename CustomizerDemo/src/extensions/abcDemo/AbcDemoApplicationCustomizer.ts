import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './AbcDemo.module.scss';

import * as strings from 'AbcDemoApplicationCustomizerStrings';

const LOG_SOURCE: string = 'AbcDemoApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAbcDemoApplicationCustomizerProperties {
  // This is an example; replace with your own property
  Top: string;
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AbcDemoApplicationCustomizer
  extends BaseApplicationCustomizer<IAbcDemoApplicationCustomizerProperties> {

  private _topPlceHolder: PlaceholderContent | undefined;
  private _bottomPlaceHolder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    this.context.placeholderProvider.changedEvent.add(this,this._renderPlaceHolder);
    this._renderPlaceHolder();
    return Promise.resolve();
  }
  private _renderPlaceHolder(): void {
    console.log("PlaceHodlers");
    this.context.placeholderProvider.placeholderNames.
    map(placeholdername => PlaceholderName[placeholdername]).join(', ');
    if (!this._topPlceHolder) {
      this._topPlceHolder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });

    }
    if (!this._topPlceHolder) {
      console.error("PlaceHolde Top not found");
      return;
    }

    if (this.properties) {
      let topString: string = this.properties.Top;
      if (!topString) {
        topString = '(Top property was not defined...)';
      }

      if (this._topPlceHolder.domElement) {
        this._topPlceHolder.domElement.innerHTML = `
    <div class="${styles.abcdemoapp}">
    <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.topPlaceholder}">
    <i class="ms-Icon ms-Icon-Info" aria-hidden="true"></i>${escape(topString)}
    </div>
    </div>
    `;
      }
    }

    if (!this._bottomPlaceHolder) {
      this._bottomPlaceHolder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });

    }
    if (!this._bottomPlaceHolder) {
      console.error("PlaceHolde Top not found");
      return;
    }
    if (this.properties) {
      let bottomString: string = this.properties.Bottom;
      if (!bottomString) {
        bottomString = '(Bottom property was not defined ....)';
      }

      if (this._bottomPlaceHolder.domElement) {
        this._bottomPlaceHolder.domElement.innerHTML = `
    <div class="${styles.abcdemoapp}">
    <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.bottomPlaceHolder}">
    <i class="ms-Icon ms-Icon-Info" aria-hidden="true"></i>${escape(bottomString)}
    </div>
    </div>
    `;
      }
    }
  }

private _onDispose():void{
  console.log('Disposed Custom top and bottom placeholders');
}


}
