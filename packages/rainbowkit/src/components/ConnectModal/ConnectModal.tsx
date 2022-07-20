import React from 'react';
import { useAccount } from 'wagmi';
import ConnectOptions from '../ConnectOptions/ConnectOptions';
import { Dialog } from '../Dialog/Dialog';
import { DialogContent } from '../Dialog/DialogContent';
export interface ConnectModalProps {
  container?: HTMLElement;
  open: boolean;
  onClose: () => void;
}

export function ConnectModal({ container, onClose, open }: ConnectModalProps) {
  const titleId = 'rk_connect_title';
  const { isConnected } = useAccount();

  return !isConnected ? (
    <Dialog
      container={container}
      onClose={onClose}
      open={open}
      titleId={titleId}
    >
      <DialogContent bottomSheetOnMobile padding="0" wide>
        <ConnectOptions onClose={onClose} />
      </DialogContent>
    </Dialog>
  ) : null;
}
