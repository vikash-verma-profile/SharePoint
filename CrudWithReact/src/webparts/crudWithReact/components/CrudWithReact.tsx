import * as React from 'react';
import { ICrudWithReactProps } from './ICrudWithReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICrudwithReactState } from './ICrudWithReactState';
import { ISPHttpClientOptions, SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import {
  TextField,
  PrimaryButton,
  DetailsList,
  Check,
  CheckboxVisibility,
  SelectionMode,
  DetailsListLayoutMode

}
  from 'office-ui-fabric-react'
import { ISoftwareListItem } from './ISoftwareListItem';

export default class CrudWithReact extends React.Component<ICrudWithReactProps, ICrudwithReactState>{
  private _selection: Selection;

  private _onItemSelectionChnaged = () => {
    this.setState({
      SoftwaeListItem: (this._selection.getSelection()[0] as ISoftwareListItem)
    });
  }


  constructor(props: ICrudWithReactProps, state: ICrudwithReactState) {

    super(props);

    this.state = {
      status: 'Ready',
      SoftwareListItems: [],
      SoftwaeListItem: {
        Id: 0,
        Title: "",
        SoftwareName: ""
      }
    };
    this._selection = new Selection
    ({ onSelectionChanged: this._onItemsSelectionChanged, });
  }

  private _getListItems(): Promise<ISoftwareListItem[]> {
    const url: string = this.props.siteUrl + "/_api/web/lists/getbytitle('SoftwareList')/items";
    return this.props.context.spHttpClient.get(url, SPHttpClient.configurations.v1).then(response => {
      return response.json();
    }).then(json => {
      return json.value;
    }) as Promise<ISoftwareListItem[]>;
  }

  public bindDetailList(message: string): void {
    this._getListItems().then(listItems => {
      this.setState({ SoftwareListItems: listItems, status: message });
    });
  }
  public componentDidMount():void{
    this.bindDetailList("All records have been loaded");
  }

  public render(): React.ReactElement<ICrudWithReactProps> {
    return (
      <div>
        <TextField label="ID" required={true} value={(this.state.SoftwaeListItem.Id).toString()} onChanged={e => { this.state.SoftwaeListItem.Id = e }} />

        <TextField label="Software Title" required={true} value={(this.state.SoftwaeListItem.Title).toString()} onChanged={e => { this.state.SoftwaeListItem.Title = e }} />

        <TextField label="Software Name" required={true} value={(this.state.SoftwaeListItem.SoftwareName).toString()} onChanged={e => { this.state.SoftwaeListItem.SoftwareName = e }} />

        {/* <PrimaryButton text="Add" title="Add" onClick={this.btnAdd_Click} ></PrimaryButton> */}

        <div id="divstatus">
          {this.state.status}
        </div>
        <DetailsList items={this.state.SoftwareListItems}
          setKey='Id'
          checkboxVisibility={CheckboxVisibility.always}
          selectionMode={SelectionMode.single}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          compact={true}
          selection={this._selection}
        />
      </div>

    );
  }
}
