import * as React from 'react';
import {
  Pagination as CorePagination,
  PaginationProps as CorePaginationProps,
} from 'wix-ui-core/pagination';
import { DoubleChevronLeft } from '../../assets/icons/components/DoubleChevronLeft';
import { DoubleChevronRight } from '../../assets/icons/components/DoubleChevronRight';
import { ChevronLeft } from '../../assets/icons/components/ChevronLeft';
import { ChevronRight } from '../../assets/icons/components/ChevronRight';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import styles from './Pagination.st.css';
import { TPAComponentProps } from '../../types';

export interface PaginationProps
  extends CorePaginationProps,
    TPAComponentProps {}

/** Pagination component */
export const Pagination: React.FunctionComponent<PaginationProps> = props => {
  return (
    <TPAComponentsConsumer>
      {({ mobile, rtl }) => {
        return (
          <CorePagination
            {...styles('root', { mobile, rtl }, props)}
            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
            firstLabel={<DoubleChevronLeft />}
            lastLabel={<DoubleChevronRight />}
            rtl={rtl}
            showFirstLastNavButtons={props.totalPages > props.maxPagesToShow}
            paginationMode={mobile ? 'compact' : 'pages'}
            slashLabel={'/'}
            {...props}
          />
        );
      }}
    </TPAComponentsConsumer>
  );
};

Pagination.displayName = 'Pagination';

Pagination.defaultProps = {
  maxPagesToShow: 5,
};
