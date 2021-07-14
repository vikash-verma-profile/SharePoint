import * as React from 'react';
import styles from './Webpartwithreact.module.scss';
import { IWebpartwithreactProps } from './IWebpartwithreactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Webpartwithreact extends React.Component<IWebpartwithreactProps, {}> {
  public render(): React.ReactElement<IWebpartwithreactProps> {
    return (
      <div className={ styles.webpartwithreact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>

              <p className={ styles.description }>Absolute {escape(this.props.absoluteurl)}</p>
              <p className={ styles.description }>Title{escape(this.props.sitetitle)}</p>
              <p className={ styles.description }>Relative URL{escape(this.props.relativeurl)}</p>
              <p className={ styles.description }>User Name{escape(this.props.username)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
