'use strict'

import React, { PropTypes } from 'react';
import Search from './search';
import UserInfo from './userInfo';
import Actions from './actions';
import Repository from './repository'

const AppContent = ({ 
  userInfo,
  repos, 
  starred, 
  isFetching,
  handleSearch, 
  getRepos, 
  getStarred 
}) => (
  <div className='app' >
    <Search isDisabled={ isFetching } handleSearch={ handleSearch } />

    { isFetching && <div>carregando...</div> }

    { 
      // The !! converts userInfo to boolean
      !!userInfo && <UserInfo userInfo={ userInfo } /> 
    } 

    { !!userInfo && 
      <Actions 
        getRepos={ getRepos } 
        getStarred={ getStarred }
      /> 
    }

    { !!repos.length && 
      <Repository 
        className='repos'
        title='Repositórios:' 
        repos={ repos }
      /> 
    }

    { !!starred.length &&
      <Repository 
        className='starred'
        title='Favoritos:' 
        repos={ starred } 
      /> 
    } 
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object, 
  repos: PropTypes.array.isRequired, 
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
};

export default AppContent;
