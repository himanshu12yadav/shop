import {motion, AnimatePresence} from 'motion/react';
import {useState} from 'react';
import styles from './Announcement.module.css';
import CloseIcon from '../../assets/images/close.svg';
import {Link} from "react-router-dom";


export default function Announcement() {
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <AnimatePresence>
            {
                isOpen ? (
                    <motion.div
                        className={styles['announcement-container']}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{opacity: 0 ,y:-100}}
                        transition={{duration: 0.5, ease: "easeOut"}}>
                        <p>
                            Sign up to get 10% off your first order. <span>
                            <Link to={'/signup'}>Sign Up Now</Link>
                        </span>
                        </p>
                        <span className={styles['icon']} onClick={handleIsOpen}>
                <img  src={CloseIcon} alt="Close Icon" width={20} height={20} />
            </span>
                    </motion.div>

                )  : null
            }
        </AnimatePresence>
    );
}
