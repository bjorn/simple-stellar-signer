import type { Operation, Transaction } from 'stellar-sdk';

import AbstractOperationComponent from '../AbstractOperationComponent';
import type IOperationComponent from '../IOperationComponent';

export default class ClaimClaimableBalanceComponent extends AbstractOperationComponent implements IOperationComponent {
    constructor(tx: Transaction, operation: Operation.ClaimClaimableBalance) {
        super({
            title: 'OPERATION_CLAIM_CLAIMABLE_BALANCE',
            operationItems: [
                { title: 'SOURCE_ACCOUNT', value: operation.source || tx.source },
                { title: 'BALANCE_ID', value: operation.balanceId },
            ],
        });
    }
}
