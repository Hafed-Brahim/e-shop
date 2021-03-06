import React from 'react';
import {withRouter} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items,match,history}) => (
    <div className = 'collection-preview'>
        <h1 className = 'title' ><span onClick = {() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</span></h1>
        <div className= 'preview'>
            {
                items
                    .filter((item, idx) => (idx < 4))
                    .map((item) => (
                        <CollectionItem key = {item.id} item = {item} />
                    )
                )
            }
        </div>
    </div>
)

export default withRouter(CollectionPreview);