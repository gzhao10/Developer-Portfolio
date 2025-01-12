import { contacts } from '../constants'

const Footer = () => {
    return (
        <footer className='w-full flex items-center py-5 z-20 bg-primary'>
            <div className="flex flex-row gap-40 mx-auto">
                {contacts.map((contact) => (
                    <div className='flex items-center'>
                        <a 
                            className="text-white hover:text-secondary text-[18px] font-medium flex container"
                            href={contact.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {contact.id}
                            <img src={contact.image} alt={contact.id} className={`${contact.dimensions} object-contain image`}/>
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer