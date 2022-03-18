import { IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
    isOpenDrawer: boolean
    openDrawer: () => void
    closeDrawer: () => void
}

export default function DrawerIconButton(props: Props) {

    return (
        <>
            {!props.isOpenDrawer ?
                <IconButton onClick={props.openDrawer}>
                    <ExpandMoreIcon />
                </IconButton>
                :
                <IconButton onClick={props.closeDrawer}>
                    <ExpandLessIcon />
                </IconButton>
            }
        </>
    )
}