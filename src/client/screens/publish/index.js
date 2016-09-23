import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Button, Icon,
    View, Text, List, ListItem, Thumbnail } from 'native-base';

import { FormattedDate } from 'react-native-globalize';
import Swipeout from 'react-native-swipeout';

import { Colors } from '../../shared/assets/style';
import * as JobMock from '../../mock/job';
import Style from './assets/style';

export default class Provider extends Component {
    static propTypes = {
        navigate: PropTypes.object,
    }

    constructor(props) {
        super(props);

        this.state = {
            jobs: JobMock.data,
            editable: false,
        };
    }

    buildJobs() {
        const rows = [];

        this.state.jobs.forEach((item, i) => {
            rows.push(
                <ListItem key={i} iconRight>
                    <Swipeout right={[{
                        text: 'Remover',
                        backgroundColor: Colors.RED,
                        onPress: this.remove.bind(this, item, i),
                    }]}
                      backgroundColor={'transparent'} close={!this.state.editable}
                    >
                        <View style={Style.containerRow} >
                            <View style={Style.containerProfessional}>
                                <Thumbnail style={Style.picture} circular size={80}
                                  source={{ uri: item.professional.picture }}
                                />
                                <Text style={Style.typeJob}>{ item.typeJob.description }</Text>
                                <FormattedDate style={Style.dateJob} value={item.dateExecution} skeleton="yMdhm" />
                                <View style={Style.containerButtom}>
                                    <Button info normal iconLeft onPress={() => this.props.navigate.push({
                                        name: 'chat',
                                        passProps: { professional: item.professional },
                                    })}><Icon name="ios-chatbubbles" />
                                    </Button>
                                    <Button info normal iconLeft success style={Style.buttonEvaluate} onPress={() => this.props.navigate.push({
                                        name: 'evaluation',
                                        passProps: { job: item },
                                    })}><Icon name="ios-ribbon" />
                                    </Button>
                                </View>
                            </View>
                            <View style={Style.containerTypeJob}>
                                <Text style={Style.descriptionJob}>{ item.description }</Text>
                            </View>
                        </View>
                    </Swipeout>
                </ListItem>
            );
        });

        return (
            <List>{ rows }</List>
        );
    }

    remove(item, i) {
        this.state.jobs.splice(i, 1);
        this.setState({ jobs: this.state.jobs });
    }

    edit() {
        this.setState({ editable: !this.state.editable });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={() => this.props.navigate.pop()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>Contratados</Title>
                    <Button transparent onPress={() => this.props.navigate.pop()} onPress={this.edit.bind(this)}>
                        { this.state.editable ? 'OK' : 'Editar' }
                    </Button>
                </Header>
                <Content>
                    { this.buildJobs() }
                </Content>
            </Container>
        );
    }
}
