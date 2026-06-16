import { contacts, ContactLink } from '@/entities/contact'
import { ScrollReveal } from '@/features/scroll-reveal'
import styles from './Contacts.module.scss'

export function Contacts() {
  return (
    <section className={styles.contacts} id="contacts" aria-labelledby="contacts-label">
      <ScrollReveal className={styles.inner} stagger>
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
      </ScrollReveal>
    </section>
  )
}
