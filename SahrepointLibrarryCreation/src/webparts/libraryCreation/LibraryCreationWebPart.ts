import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './LibraryCreationWebPart.module.scss';
import * as strings from 'LibraryCreationWebPartStrings';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions, SPHttpClientConfiguration } from '@microsoft/sp-http';


export interface ILibraryCreationWebPartProps {
  description: string;
}

export default class LibraryCreationWebPart extends BaseClientSideWebPart<ILibraryCreationWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <div>
    <div>
        <table>
            <tr>
                <td>Software Title</td>
                <td><input type="text" id="txtSoftwareTitle" /></td>
            </tr>
            <tr>
                <td>Software Name</td>
                <td><input type="text" id="txtSoftwareName" /></td>
            </tr>
            <tr>
                <td>Software Vendor</td>
                <td>
                    <select id="ddlSoftwareVendor">
                        <option value="Microsoft">Microsoft</option>
                        <option value="Sun">Sun</option>
                        <option value="Oracle">Oracle</option>
                        <option value="Google">Google</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Software Description</td>
                <td><textarea id="txtSoftwareDescription"></textarea></td>
            </tr>
            <tr>
                <td><input type="submit" value="Insert" id="btnSubmit"></td>
                <td><input type="submit" value="Update" id="btnUpdate"></td>
                <td><input type="submit" value="Delete" id="btnDelete"></td>
                <td><input type="submit" value="Showa all Records" id="btnReadAll"></td>
            </tr>
        </table>
    </div>
    <div id="divstatus"></div>
</div>
   `;
    this.bindEvents();
  }
  private bindEvents(): void {
    this.domElement.querySelector("#btnSubmit").addEventListener('click', () => { this.addListItem(); });
  }
  private addListItem(): void {

    var softwareTitle = document.getElementById("txtSoftwareTitle")["value"];
    var softwareName = document.getElementById("txtSoftwareName")["value"];
    var softwareVendor = document.getElementById("ddlSoftwareVendor")["value"];
    var softwareDescription = document.getElementById("txtSoftwareDescription")["value"];

    const listUrl: string = this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('SoftwareCatalog')/items";

    const itemBody: any = {
      "SoftwareTitle": softwareTitle,
      "SoftwareVendor": softwareVendor,
      "SoftwareName": softwareName,
      "SoftwareDescription": softwareDescription,
    };
    const spHttpClientOptions: ISPHttpClientOptions = {
      "body": JSON.stringify(itemBody)
    };

    this.context.spHttpClient.post(listUrl, SPHttpClient.configurations.v1, spHttpClientOptions).
      then((response: SPHttpClientResponse) => {
        if (response.status === 201) {
          let statusmessage: Element = this.domElement.querySelector('#divstatus');
          console.log(statusmessage);
          statusmessage.innerHTML = "A New Item has been created";
          this.clear();
        }
        else {
          alert("Error Message:  " + response.status + response.statusText);
        }
      });
  }
  private clear(): void {
    document.getElementById("txtSoftwareDescription")['value']='';
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
