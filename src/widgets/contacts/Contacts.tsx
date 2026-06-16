import { contacts, ContactLink } from '@/entities/contact'
import styles from './Contacts.module.scss'

export function Contacts() {
  return (
    <section id="contacts" aria-labelledby="contacts-label">
      <div className={styles.inner}>
        <p className={styles.label} id="contacts-label">
          контакты
        </p>

        <div className={styles.body}>
          <ul className={styles.links}>
            {contacts.map((link) => (
              <li key={link.id}>
                <ContactLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
