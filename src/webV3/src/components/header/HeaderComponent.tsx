import * as React from 'react';
import AppNameComponent from '../../containers/header/AppNameContainer';
// @ts-ignore
import { Dropdown, Icon, Navbar, NavItem } from 'react-materialize';
import NotepadDropdownComponent from '../../containers/header/NotepadDropdownContainer';
import { INotepadStoreState } from '../../types/NotepadTypes';

export interface IHeaderComponentProps {
	getHelp?: () => void;
	notepad?: INotepadStoreState;
}

export default class HeaderComponent extends React.Component<IHeaderComponentProps> {
	private readonly navStyle = {
		position: 'fixed'
	};

	render() {
		const { getHelp, notepad } = this.props;

		return (
			<Navbar className="blue-grey" brand={<AppNameComponent />} style={this.navStyle} right={true}>
				<NotepadDropdownComponent />
				{!!notepad && !!notepad.item && <NavItem href="#!"><Icon left={true}>search</Icon> Search</NavItem>}
				<NavItem href="#!" onClick={getHelp}><Icon left={true}>help_outline</Icon> Help</NavItem>
			</Navbar>
		);
	}
}
