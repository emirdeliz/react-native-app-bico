import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content,
    Button, Icon, Text, List, ListItem } from 'native-base';

import Style from './assets/style';

export default class Filter extends Component {
    static propTypes = {
        navigate: PropTypes.object,
        filter: PropTypes.object,
        selectedFilter: PropTypes.func,
    }
    constructor(props) {
        super(props);

        this.state = {
            currentFilter: this.props.filter,
            previousDescription: '',
            path: [],
        };
    }

    buildFilter() {
        const rows = [];
        const currentFilter = this.state.currentFilter.types ? this.state.currentFilter.types : this.state.currentFilter;

        currentFilter.forEach((item, i) => rows.push(
            <ListItem style={Style.filterContainer} key={i} onPress={() => {
                if (item.types) {
                    this.state.path.push(this.state.currentFilter);
                    this.setState({ currentFilter: item, path: this.state.path });
                } else {
                    this.props.selectedFilter(item);
                    this.props.navigate.pop();
                }
            }}>
                <Text>{ item.description }</Text>
            </ListItem>
        ));
        return <List>{ rows }</List>;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>
                        Categorias <Text style={Style.subTitle}>{ this.state.currentFilter.description }</Text>
                    </Title>
                    <Button transparent onPress={() => {
                        if (this.state.path.length === 0)
                            this.props.navigate.pop();
                        else {
                            const previousFilter = this.state.path.pop();
                            this.setState({ currentFilter: previousFilter, path: this.state.path });
                        }
                    }}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                </Header>
                <Content>
                    { this.buildFilter() }
                </Content>
            </Container>
        );
    }
}
