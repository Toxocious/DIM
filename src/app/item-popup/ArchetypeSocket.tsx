import { D2ManifestDefinitions } from 'app/destiny2/d2-definitions';
import { DimItem, DimSocket } from 'app/inventory/item-types';
import clsx from 'clsx';
import React from 'react';
import styles from './ArchetypeSocket.m.scss';
import Socket from './Socket';

/**
 * A special socket display for the "archetype" socket (or exotic perk) and
 */
export default function ArchetypeSocket({
  archetype,
  defs,
  item,
  isPhonePortrait,
  children,
}: {
  archetype?: DimSocket;
  item: DimItem;
  defs: D2ManifestDefinitions;
  isPhonePortrait: boolean;
  children?: React.ReactNode;
}) {
  if (!archetype?.plugged) {
    return null;
  }

  return (
    <>
      <div className={styles.mod}>
        <Socket
          key={archetype.socketIndex}
          defs={defs}
          item={item}
          isPhonePortrait={isPhonePortrait}
          socket={archetype}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{archetype.plugged.plugDef.displayProperties.name}</div>
        {children}
      </div>
    </>
  );
}

export function ArchetypeRow({
  className,
  children,
  minimal,
}: {
  className?: string;
  children: React.ReactNode;
  minimal?: boolean;
}) {
  return (
    <div className={clsx(className, styles.row, { [styles.minimal]: minimal })}>{children}</div>
  );
}