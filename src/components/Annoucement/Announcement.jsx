import { useState } from 'react';
import styles from './Announcement.module.css'
import CloseIcon from '@mui/icons-material/Close';


export default function Announcement() {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className={styles.container}>
        <p>Sign up and get 20% off to your first order. <u>Sign Up Now</u></p>
        {open && <CloseIcon fontSize="small" style={{ color: '#fff' }} onClick={() => setOpen(prev => !prev)} />}
      </div>
    )
  )
}