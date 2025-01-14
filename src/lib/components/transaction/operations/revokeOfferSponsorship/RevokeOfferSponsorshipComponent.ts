import type { Operation, Transaction } from 'stellar-sdk';

import AbstractOperationComponent from '../AbstractOperationComponent';
import type IOperationComponent from '../IOperationComponent';

export default class RevokeOfferSponsorshipComponent extends AbstractOperationComponent implements IOperationComponent {
    constructor(tx: Transaction, operation: Operation.RevokeOfferSponsorship) {
        super({
            title: 'OPERATION_REVOKE_OFFER_SPONSORSHIP',
            operationItems: [
                { title: 'SOURCE_ACCOUNT', value: operation.source || tx.source },
                { title: 'SELLER', value: operation.seller },
                { title: 'OFFER_ID', value: operation.offerId },
            ],
        });
    }
}
