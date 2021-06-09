import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const searchClient = algoliasearch(
  'testingWYUM3QGL0M',
  '298a84786d04a76fc9edccfbd203bb8e'
);

import styles from './Search.module.scss';
import SearchInterface from './SearchInterface';

class Search extends React.Component<SearchInterface.IProps, SearchInterface.IState> {
    constructor(props: SearchInterface.IProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return <div className={styles.container}>
        <InstantSearch
          searchClient={searchClient}
          indexName="Stage-ComputerUniverse"
        >
          <div className={styles.searchPanel}>
            <div className={styles.searchPanel__results}>
              <SearchBox
                className={styles.searchbox}
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />
            </div>
            <div className={styles.pagination}>
              <Pagination />
            </div>  
          </div>
        </InstantSearch>
      </div>
    }
}

function Hit(props) {
  return (
    <article>
      <p>
        <code>{JSON.stringify(props.hit).slice(0, 100)}...</code>
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
