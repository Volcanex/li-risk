import { createBoard } from '@wixc3/react-board';
import Button from '../../../components/button/button';
import { BrowserRouter as Router } from 'react-router-dom';

export default createBoard({
    name: 'Button',
    Board: () => (
        <Router>
            <Button
                isActive={true}
                label="Click me"
                handleClick={() => {
                    // handle click logic here
                }}
            />
        </Router>
    ),
    // rest of the board configuration
});
