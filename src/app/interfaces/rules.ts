export interface FromIncidence {
    value: number;
}

export interface ImportantAnnouncement {
    rule: string;
}

export interface SpecialRules {
    rule: string;
}

export interface SportsRules {
    rule: string;
}

export interface TravelRules {
    rule: string;
}

export interface PartyRules {
    rule: string;
}

export interface CultureRules {
    rule: string;
}
export interface ClosedStores {
    stores: string;
    explicitlyOpen: string;
    remarks: string;
}

export interface ClosedInstitutions {
    institutions: string;
    explicitlyOpen: string;
    remarks: string;
}

export interface GoingOutBan {
    rule: string;
    isBan: boolean;
}

export interface ContactsRule {
    where: string;
    contactsNumber: number;
    remarks: string;
};

export interface MasksRule {
    isMasks: boolean;
    where: string;
};

export interface IncidenceValues {
    values: number[];
};

export interface IncidenceRulesSet {
    contactsInside: ContactsRule;
    contactsOutside: ContactsRule;
    specialRules: SpecialRules;
    sportsRules: SportsRules;
    travelRules: TravelRules;
    partyRules: PartyRules;
    cultureRules: CultureRules;
    fromIncidence: FromIncidence;
    goingOutBan: GoingOutBan;
};

export interface RulesSet {
    importantAnnouncement: ImportantAnnouncement;
    masks: MasksRule;
    closedStores: ClosedStores;
    closedInstitutions: ClosedInstitutions;
    incidenceRules: Array<IncidenceRulesSet>;
    timestamp: Number;
};

export function initIncidenceRulesSet() {
    return {
        fromIncidence: {
            value: 0
        },
        contactsInside: {
            where: 'innen',
            contactsNumber: 0,
            remarks: ''
        },
        contactsOutside: {
            where: 'draußen',
            contactsNumber: 0,
            remarks: ''
        },
        specialRules: {
            rule: ''
        },
        goingOutBan: {
            rule: '',
            isBan: false
        },
        sportsRules: {
            rule: ''
        },
        travelRules: {
            rule: ''
        },
        partyRules: {
            rule: ''
        },
        cultureRules: {
            rule: ''
        }
    };
}

export function checkRulesIntegrity(rules: RulesSet) {
    if (rules.timestamp == undefined) {
        rules.timestamp = 0;
    }

    if (rules.closedInstitutions == undefined ||
        Array.isArray(rules.closedInstitutions)) {
        rules.closedInstitutions = { institutions: '', explicitlyOpen: '', remarks: '' };
    }

    if (rules.closedInstitutions.institutions == undefined) {
        rules.closedInstitutions.institutions = '';
    }

    if (rules.closedInstitutions.explicitlyOpen == undefined) {
        rules.closedInstitutions.explicitlyOpen = '';
    }

    if (rules.closedInstitutions.remarks == undefined) {
        rules.closedInstitutions.remarks = '';
    }

    if (rules.closedStores == undefined ||
        Array.isArray(rules.closedStores)) {
        rules.closedStores = { stores: '', explicitlyOpen: '', remarks: '' };
    }

    if (rules.closedStores.stores == undefined) {
        rules.closedStores.stores = '';
    }

    if (rules.closedStores.explicitlyOpen == undefined) {
        rules.closedStores.explicitlyOpen = '';
    }

    if (rules.closedStores.remarks == undefined) {
        rules.closedStores.remarks = '';
    }

    if (rules.importantAnnouncement == undefined) {
        rules.importantAnnouncement = { rule: '' };
    }

    if (rules.masks == undefined) {
        rules.masks = { isMasks: false, where: '' };
    }

    if (rules.incidenceRules == undefined) {
        rules.incidenceRules = [initIncidenceRulesSet()]
    } else {
        for (let rule of rules.incidenceRules) {
            rule = checkIncidenceRulesIntegrity(rule);
        }
    }
    return rules;
}

export function checkIncidenceRulesIntegrity(rule: IncidenceRulesSet) {
    if (rule.contactsInside == undefined) {
        rule.contactsInside = { where: '', remarks: '', contactsNumber: 0 }
    }
    if (rule.contactsInside.where == undefined) {
        rule.contactsInside.where = '';
    }
    if (rule.contactsInside.remarks == undefined) {
        rule.contactsInside.where = '';
    }
    if (rule.contactsInside.contactsNumber == undefined) {
        rule.contactsInside.contactsNumber = 0;
    }
    if (rule.contactsOutside == undefined) {
        rule.contactsOutside = { where: '', remarks: '', contactsNumber: 0 }
    }
    if (rule.contactsOutside.where == undefined) {
        rule.contactsOutside.where = '';
    }
    if (rule.contactsOutside.remarks == undefined) {
        rule.contactsOutside.where = '';
    }
    if (rule.contactsOutside.contactsNumber == undefined) {
        rule.contactsOutside.contactsNumber = 0;
    }
    if (rule.fromIncidence == undefined) {
        rule.fromIncidence = { value: 0 };
    }
    if (rule.goingOutBan == undefined) {
        rule.goingOutBan = { isBan: false, rule: '' };
    }
    if (rule.specialRules == undefined) {
        rule.specialRules = { rule: '' };
    }
    if (rule.sportsRules == undefined) {
        rule.sportsRules = { rule: '' };
    }
    if (rule.travelRules == undefined) {
        rule.travelRules = { rule: '' };
    }
    if (rule.partyRules == undefined) {
        rule.partyRules = { rule: '' };
    }
    if (rule.cultureRules == undefined) {
        rule.cultureRules = { rule: '' };
    }
    return rule;
}
