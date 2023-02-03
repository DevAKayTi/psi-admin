import {motion} from 'framer-motion';

export default function AnimateButton({children}){
    return (
        <motion.div whileHover={{scale:1}} whileTap={{ scale:0.9 }}>
            {children}
        </motion.div>
    )
}