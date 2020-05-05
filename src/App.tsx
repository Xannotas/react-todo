import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './styles/style.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'
import { Folder } from './types';
import { RootState } from './redux/store';

type DispatchProps = {}
type OwnProps = {}
type StateProps = {
  folders: Folder[],
  currentFolderId: number | null,
  isShowAllFolders: boolean
}
type Props = StateProps & DispatchProps & OwnProps

const App: React.FC<Props> = ({folders, currentFolderId, isShowAllFolders}) => {
  useEffect(() => {
    localStorage.setItem('folders', JSON.stringify(folders))
  }, [folders])

  useEffect(() => {
    localStorage.setItem('currentFolderId', currentFolderId !== null ? currentFolderId.toString() : '')
  }, [currentFolderId])

  useEffect(() => {
    localStorage.setItem('isShowAllFolders', isShowAllFolders ? 'true' : 'false')
  }, [isShowAllFolders])

  return (
    <div className='app'>
      <Sidebar />
      <Content />
    </div>
  );
}

const mapState = (state: StateProps) => {
  return {
    folders: state.folders,
    currentFolderId: state.currentFolderId,
    isShowAllFolders: state.isShowAllFolders
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState)(App);