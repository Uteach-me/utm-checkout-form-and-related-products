import styled from 'styled-components';
import { OndemandVideo, InsertDriveFile } from 'styled-icons/material';

const VideoIcon = styled(OndemandVideo)`
  flex: 0 0 auto;
  min-width: 1px;
  magin-right: 6px;
  margin-top: -3px;
  padding-right: 1.5px;
  width: 15px;
`;

const ArticleIcon = styled(InsertDriveFile)`
  flex: 0 0 auto;
  min-width: 1px;
  magin-right: 6px;
  margin-top: -3px;
  padding-right: 1.5px;
  width: 15px;
`;

export { VideoIcon, ArticleIcon };
