export interface LowerIncidence {
    value: number;
}

export interface UpperIncidence {
    value: number;
}

export interface ImportantAnnouncement {
    rule: string;
}

export interface SpecialRules {
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
}

export interface  ContactsRule {
    where: string;
    contactsNumber: number;
    remarks: string;
};

export interface  MasksRule {
    isMasks: boolean;
    where: string;
};

export interface RulesSet {
    contactsInside: ContactsRule;
    contactsOutside: ContactsRule;
    importantAnnouncement: ImportantAnnouncement;
    specialRules: SpecialRules;
    lowerIncidence: LowerIncidence;
    upperIncidence: UpperIncidence;
    masks: MasksRule;
    closedStores: ClosedStore[];
    closedInstitutions: ClosedInstitution[];
    goingOutBan: GoingOutBan;
};
