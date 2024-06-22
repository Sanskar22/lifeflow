import Footer from './Footer'
import Header_Terms_Donate from './Header_Terms_Donate'
import PrivacyPolicyContent from './PrivacyPolicyContent'

const PrivacyPolicy = () => {
    return (
        <div className='bg-gray-200'>
            <Header_Terms_Donate />
            <PrivacyPolicyContent />
            <Footer />
        </div>
    )
}

export default PrivacyPolicy
