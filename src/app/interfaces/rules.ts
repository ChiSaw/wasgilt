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

export interface ClosedStore {
    store: string;
}

export interface ClosedInstitution {
    institution: string;
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
    fromIncidence: FromIncidence;
    goingOutBan: GoingOutBan;
};

export interface RulesSet {
    importantAnnouncement: ImportantAnnouncement;
    masks: MasksRule;
    closedStores: ClosedStore[];
    closedInstitutions: ClosedInstitution[];
    incidenceRules: Array<IncidenceRulesSet>;
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
        }
    };
}