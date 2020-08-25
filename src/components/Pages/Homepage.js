import React from 'react';
import Hero from '../Hero/Hero';
import GeneralContentBlock from '../ContentSections/GeneralContentBlock';

import ShowcaseContentBlock from '../ContentSections/ShowcaseContentBlock';

import ContentBlockImage1 from '../../assets/images/contentimage1.jpg';
import slide1 from '../../assets/images/content2.jpg'
import slide2 from '../../assets/images/content3.jpg'
import slide3 from '../../assets/images/content4.jpg'
import slide4 from '../../assets/images/content5.jpg'



export default function Homepage() {
	return (
		<div>
			<Hero />
			<GeneralContentBlock
				title="Cities, Mountains, Forests and Coasts"
				subtitle="exploring places to share with the world"
				image={ContentBlockImage1}
				text="Sharing our experiences and giving you inspriation for your travels. if we find an amazing place we share it. From remote nature to bustling cities, there is something for everyone to discover."
				ctaLink="/hotspots"
				ctaName="Trip Ideas"
				style={{ padding: '1rem' }}
				contentSwitch={true}
			/>

			<GeneralContentBlock
				title="Cities, Mountains, Forests and Coasts"
				subtitle="exploring places to share with the world"
				image={ContentBlockImage1}
				text="Sharing our experiences and giving you inspriation for your travels. if we find an amazing place we share it. From remote nature to bustling cities, there is something for everyone to discover."
				ctaLink="/hotspots"
				ctaName="Trip Ideas"
				style={{ padding: '1rem' }}
				contentSwitch={false}
			/>
            <ShowcaseContentBlock 
            images={[slide1,slide2,slide3,slide4]} 
            title={"Find Your Next Adventure"}
            subtitle={"Breath Taking Views and Memorable Experiences"}
            text={"We share our travels and experiences for others to follow."}
            ctaName={'Explore'}
            />
		</div>
	);
}
