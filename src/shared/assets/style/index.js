const Colors = {
    BLUE     : '#4682b4',
    WHITE    : '#f6f6f6',
    POSITIVE : '#9acd32',
    BLACK    : '#000',
    GRAY     : '#696969',

    LIGHT    : '#858585',
    STABLE   : '#f8f8f8',

    CALM     : '#11c1f3',
    BALANCED : '#33cd5f',
    ENERGIZED: '#ffc900',
    ASSERTIVE: '#ef473a',
    ROYAL    : '#886aea'
}

const text = {
    color: Colors.GRAY
}

const icon = {
    color: Colors.GRAY
}

const container = {
    flex: 1
}

const input = {
    height: 40,
    borderColor: Colors.GRAY,
    borderWidth: 1
}

const Commons = {
    content: {
        flex: 1
    },
    header: {
        backgroundColor: Colors.BLUE
    },
    iconList:{
        ...icon,
        fontSize: 13
    },
    textNormal: {
        ...text,
        fontSize: 15
    },
    textSmall: {
        ...text,
        fontSize: 10
    },
    containerColumn: {
        ...container,
        flexDirection: 'column',
    },
    containerRow: {
        ...container,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconLarge: {
        ...icon,
        fontSize: 50
    },
    iconNormal: {
        ...icon,
        fontSize: 20
    },
    iconSmall: {
        ...icon,
        fontSize: 15
    },
    textArea: {
         ...input,
         flex: 1,
         flexDirection: 'row',
         height: 80
    },
    buttonRoundedNormal: {
        width: 80,
        height: 80
    }
}

const MergeStyle = (target, source) => {
    const isObject = (item) => {
        return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
    }

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                MergeStyle(target[key], source[key]);
            } else {
                if(!target[key])
                    Object.assign(target, { [key]: source[key] });
            }
        });
    }
    return target;
}

export { Colors, Commons, MergeStyle }
