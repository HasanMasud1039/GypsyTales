const SectionTitle = ({heading, subheading, additionalStyle}) => {
    return (
        <div className={`${additionalStyle} space-y-4 py-2`}>
            <p style={{fontFamily :'Edu TAS Beginner'}} className="text-blue-800 dark:text-orange-500 md:text-[32px] text-[24px] font-semibold">--- {subheading} ---</p>
            <h3 style={{fontFamily : 'Chakra Petch'}} className="text-black dark:text-white md:text-[48px] text-[32px] font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;