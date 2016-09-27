import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Button, Icon,
    View, Text, List, ListItem, Thumbnail } from 'native-base';

import * as AccountMock from '../../../mock/account';

import { Colors } from '../../../shared/assets/style';
import Style from '../assets/style';

export default class AccountComponent extends Component {
    static propTypes = {
        navigate: PropTypes.object,
    }

    constructor(props) {
        super(props);

        this.state = {
            account: AccountMock.default,
            editable: false,
        };
    }

    render() {
        return (
            <Container>
                <Header style={Style.toolbar}>
                    <Title style={Style.textToolbar}>Minha conta</Title>
                    <Button textStyle={{ color: Colors.WHITE }} transparent onPress={() => {
                        this.props.navigate.push({
                            name: 'account-edit',
                            passProps: {
                                account: this.state.account,
                                editable: true,
                            },
                        });
                    }}>Editar
                    </Button>
                </Header>
                <View>
                    <View style={Style.containerPhoto}>
                        <Thumbnail circular source={{ uri: this.state.account.picture }} size={100} />
                        <Text style={[Style.textNormal, Style.textToolbar]}>{ this.state.account.name }</Text>
                        <Text style={[Style.textSmall, Style.textToolbar]}>
                            DDD { `${this.state.account.ddd} - ${this.state.account.adress}` }
                        </Text>
                    </View>
                    <List>
                        <ListItem onPress={() =>
                            this.props.navigate.push({
                                name: 'work-contract',
                            })
                        } iconRight
                        >
                            <Text style={Style.textNormal}>Meus serviços</Text>
                            <Icon name="ios-arrow-forward" style={Style.iconList} />
                        </ListItem>
                        <ListItem onPress={() =>
                            this.props.navigate.push({
                                name: 'work-offered',
                            })
                        } iconRight
                        >
                            <Text style={Style.textNormal}>Meus clientes</Text>
                            <Icon name="ios-arrow-forward" style={Style.iconList} />
                        </ListItem>
                    </List>
                </View>
            </Container>
        );
    }
}
