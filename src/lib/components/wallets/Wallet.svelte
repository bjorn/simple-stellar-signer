<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import { language } from '../../../store/global';
    import type IWallet from '../../wallets/IWallet';
    import PrivateKey from '../../wallets/privateKey/PrivateKey';

    export let width = 35;
    export let height = 37;
    export let wallet: IWallet;

    const dispatch = createEventDispatcher();
    const isInstalled = wallet.isInstalled();

    async function connect(): Promise<void> {
        if (wallet.getName() === PrivateKey.NAME) {
            dispatch('connect', { wallet, publicKey: null });
        } else {
            dispatch('connect', { wallet, publicKey: wallet.getPublicKey() });
        }
    }
</script>

<div class="simple-signer wallet-container">
    {#await isInstalled then isInstalled}
        <div class="simple-signer wallet-items-container {isInstalled ? 'shadow' : ''}" on:click={connect}>
            <div class="simple-signer wallet-items {isInstalled ? '' : 'wallet-opacity'}">
                <img
                    alt="{wallet.getFriendlyName()} logo"
                    class="simple-signer wallet-logo"
                    height={height}
                    src={wallet.getImage()}
                    width={width}
                />

                <span class="simple-signer wallet-title {isInstalled ? '' : 'wallet-title-opacity'}">
                    {wallet.getFriendlyName()}
                </span>
            </div>

            <a class="simple-signer {isInstalled ? '' : 'install-wallet'}" target="_blank" href={wallet.getExtension()}
                >{isInstalled ? '' : $language.INSTALL}</a
            >
        </div>
    {/await}
</div>

<style>
    .wallet-opacity,
    .wallet-title-opacity {
        opacity: 0.3;
    }
    .install-wallet {
        color: #2f69b7;
        text-align: center;
        line-height: 22px;
        background-color: #bbd8ff;
        width: 90px;
        height: 20px;
        margin-right: 15px;
        box-shadow: 0px 3px 3px -2px;
    }
    .wallet-logo {
        margin-left: 15px;
    }

    .wallet-title {
        margin-left: 21px;
        letter-spacing: 0.14px;
        color: #1a1a1a;
    }

    .wallet-title:hover {
        color: #000;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }
    .wallet-items-container {
        display: flex;
        color: #bdbdbd;
        border: 1px solid #f5f5f5;

        width: 310px;
        height: 58px;
        margin-bottom: 15px;
        cursor: pointer;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .shadow {
        box-shadow: 0px 6px 8px -2px;
    }

    .wallet-items {
        display: flex;
        align-items: center;
    }

    .wallet-container {
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
    }
</style>
