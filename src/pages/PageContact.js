import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import HeadingsAnimation from "../components/HeadingsAnimation";
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageContact = () => {

  //useState hook for the function that clears out the data from the form on submit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // useState hook for initial animation and useEffect hook with timeout to animate headings' letters on hover
  const [letterClassName, setLetterClassName] = useState('animated-text');

  useEffect(() => {
    setTimeout(() => {
      setLetterClassName('animated-text__hover')
    }, 2000)
  }, []);

  //strings and arrays of headings to be animated
  //primary heading in the about section
  const h1 = 'Contact Me';
  const h1Array = [...h1];

  //useRef hook for the contact form/emailjs
  const form = useRef();
  
  //function that makes emailjs service work
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_hi3i087',
        'template_y71vya5',
        form.current,
        'dmvXmOO-g4gcPbnjR'
      )
      .then(
          () => {
            //popup message for successfully sending a message via form
            toast.success('Thank you for sending the message, I\'ll get back to you as soon as possible!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            })
            //clear out the data in the form on submit
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          },
          () => {
            //popup message for an error with sending a message via form
            toast.error('Failed to send a message, please try again', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
           });
         }
      )
  }

  return (
    <div className='contact-page'>
      <h1 className='heading-secondary u-margin-top-large u-margin-bottom-medium'>
        <HeadingsAnimation letterClassName={letterClassName} headingArray={h1Array}/>
      </h1>

      <div className="flex-wrap">
        <section className='section-form'>
          <p className='section-form__paragraph'>
            I am currently seeking web development opportunities and open to
            full-time, part-time, contract, freelance, and internship positions. Please feel free to shoot me a message!
          </p>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input 
              className="contact-form__input" 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input 
              className="contact-form__input" 
              type="email" 
              name="email" 
              placeholder="Email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input 
              className="contact-form__input" 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <textarea 
              className="contact-form__textarea" 
              name="message" 
              placeholder="Your message..." 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <input className="btn-text" type="submit" value="SEND" />
          </form>
          <ToastContainer />
        </section>

        <section className='section-map'>
          <MapContainer center={[45.42007384204425, -75.69506871147215]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.42007384204425, -75.69506871147215]} icon={new Icon({iconUrl: MarkerIcon, iconSize: [25, 41], iconAnchor: [12, 41]})}>
              <Popup>Hey, let's create something extraordinary together!👋</Popup>
            </Marker>
          </MapContainer>
        </section>
      </div>

      <section className='section-regards'>
        <h3 className="heading-tertiary heading-tertiary--regards u-margin-top-large u-margin-bottom-small">
          Hey there!
        </h3>

        <p className='section-regards__text'>
          Thank you for making it all the way to my contact page, I'm excited to hear from you soon.
        </p>
        <p className='section-regards__text'>
          While you're still here, you can add me on <a href='https://www.linkedin.com/' className="in-text-link">LinkedIn</a> or check out my code on <a href='https://www.github.com/' className="in-text-link">GitHub</a>.
        </p>
        <p className='section-regards__text'>
          And if you're interested, you can always revisit my <Link className="in-text-link" to="/projects">projects page</Link> for another glimpse of what I've been working on.
          Wishing you a fantastic day ahead!
        </p>
      </section>
    </div>
  )
}

export default PageContact