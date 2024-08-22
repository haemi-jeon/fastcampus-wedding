import classNames from 'classnames/bind'
import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from '@sections/Heading'
import Video from '@sections/Video'
import ImageGallery from '@sections/ImageGallery'
import Intro from '@sections/Intro'
import Invitation from '@sections/Invitation'
import Calendar from '@sections/Calendar'
import Map from '@sections/Map'
import Contact from '@sections/Contact'
import Share from '@sections/Share'
import AttendCountModal from '@components/attendCountModal'

import styles from './App.module.scss'
import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding, loading, error } = useWedding()

  if (loading) {
    return <FullScreenMessage type="loading" />
  }
  if (error) {
    return <FullScreenMessage type="error" />
  }
  if (wedding === null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
