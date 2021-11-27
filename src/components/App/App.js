import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import Header from '../Header';
import MobileMenu from '../MobileMenu';
import ShoeIndex from '../ShoeIndex';

const App = () => {
	const [sortId, setSortId] = React.useState('newest');
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<>
			<Header setShowMobileMenu={setShowMobileMenu} />
			<Main>
				<ShoeIndex sortId={sortId} setSortId={setSortId} />
			</Main>
			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</>
	);
};

const Main = styled.main`
	padding: 64px 32px;

	@media ${QUERIES.tabletAndSmaller} {
		padding: 48px 32px;
	}
	@media ${QUERIES.phoneAndSmaller} {
		padding: 48px 16px;
	}
`;

export default App;
