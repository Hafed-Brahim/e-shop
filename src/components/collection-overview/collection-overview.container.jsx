import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionFetching} from '../../redux/shop/shop.selectors';

import CollectionOverview from './collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;