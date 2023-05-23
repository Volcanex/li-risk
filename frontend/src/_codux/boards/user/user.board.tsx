import { createBoard } from '@wixc3/react-board';
import { User } from '../../../components/user/user';
import { BrowserRouter as Router } from 'react-router-dom';

export default createBoard({
  name: 'User',
  Board: () => (
    <Router>
      <User />
    </Router>
  ),
  environmentProps: {
    canvasWidth: 648,
  },
});
