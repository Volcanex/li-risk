import { createBoard } from '@wixc3/react-board';
import { Control } from '../../../components/control/control';

export default createBoard({
    name: 'Control',
    Board: () => <Control />,
    environmentProps: {
        canvasWidth: 337,
    },
});
