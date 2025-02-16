import { useState } from 'react'
import styles from './Announcement.module.scss'
import CloseIcon from '@mui/icons-material/Close'

export default function Announcement() {
  const [open, setOpen] = useState(true)

  return open && (
    <div className={styles.announcement}>
      <p>
        Sign up and get 20% off to your first order. <u>Sign Up Now</u>
      </p>
      <CloseIcon
        style={{ color: '#fff', fontSize: '2rem' }}
        onClick={() => setOpen(false)}
      />
    </div>
  )
}
