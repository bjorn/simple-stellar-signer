import type { Operation, Transaction } from 'stellar-sdk';

import AbstractOperationComponent from '../AbstractOperationComponent';
import type IOperationComponent from '../IOperationComponent';

export default class RevokeDataSponsorship extends AbstractOperationComponent implements IOperationComponent {
    constructor(tx: Transaction, operation: Operation.RevokeDataSponsorship) {
        super({
            title: 'OPERATION_REVOKE_DATA_SPONSORSHIP',
            operationItems: [
                { title: 'SOURCE_ACCOUNT', value: operation.source || tx.source },
                { title: 'ACCOUNT', value: operation.account },
                { title: 'NAME', value: operation.name },
            ],
        });
    }
}
