import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldFromSpFxWebPart.module.scss';
import * as strings from 'HelloWorldFromSpFxWebPartStrings';


import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions, SPHttpClientConfiguration } from '@microsoft/sp-http';


export interface IHelloWorldFromSpFxWebPartProps {
  description: string;
}

export default class HelloWorldFromSpFxWebPart extends BaseClientSideWebPart<IHelloWorldFromSpFxWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorldFromSpFx}">
      <h3>Creating a new List Dyanamically</h3>
      <p>Please fill the below details</p>
      New List Name: <br /> <input type="text" id="txtNewListName" /> <br/><br/>
      New List Descripton:<br /><input type="text" id="txtNewListDescription" /><br/><br/>
      <input type="button" id="btnCreateNewList" value="Create New List"><br/>
      </h3>
      </div>`;
    this.bindEvents();
  }
  private bindEvents(): void {
    this.domElement.querySelector("#btnCreateNewList").addEventListener('click', () => { this.createNewList(); });
  }


  private createNewList(): void {
    var newListName = document.getElementById("txtNewListName")["value"];
    var NewListDescription = document.getElementById("txtNewListDescription")["value"];

    const listUrl: string = this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('" + newListName + "')";

    this.context.spHttpClient.get(listUrl, SPHttpClient.configurations.v1).
      then((response: SPHttpClientResponse) => {
        if (response.status === 200) {
          alert("A list already does exist with this name");
        }
        if (response.status === 404) {
          const url: string = this.context.pageContext.web.absoluteUrl + '/_api/web/lists';

          const listDefination: any = {
            "Title": newListName,
            "Description": NewListDescription,
            "AllowContentTypes": true,
            "BaseTemplate": 105,
            "ContentTypeEnabled": true
          };
          const spHttpClientOptions: ISPHttpClientOptions =
          {
            "body": JSON.stringify(listDefination)
          }
          this.context.spHttpClient.post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
          .then((response: SPHttpClientResponse) => {
            if (response.status === 201) {
              alert("A new list has been created successfully");
            }
            else {
              alert("Error Message  " + response.status + " - " + response.statusText);
            }
          });
        }
      });
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

