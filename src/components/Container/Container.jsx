import PropTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

export default function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

Container.propTypes = {
  children: PropTypes.node,
};
