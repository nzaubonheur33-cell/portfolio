import React from 'react';

/**
 * Composant de chargement circulaire
 */
export function Spinner({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-3',
    xl: 'w-16 h-16 border-4',
  };

  return (
    <div className={`inline-block ${sizes[size]} animate-spin rounded-full border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`} role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

/**
 * Base d'un squelette (shimmer effect)
 */
export function Skeleton({ className = '' }) {
  return (
    <div className={`animate-pulse bg-surface-container-high rounded-xl ${className}`}></div>
  );
}

/**
 * Skeleton pour les cartes de projets
 */
export function ProjectSkeleton() {
  return (
    <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col group h-full border border-surface-container/30">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-[220px] rounded-none bg-surface-container" />
      
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            {/* Title Skeleton */}
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-5 w-5 rounded-md" />
          </div>
          {/* Description Skeleton (3 lines) */}
          <div className="space-y-2 mt-2">
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-11/12" />
            <Skeleton className="h-3.5 w-4/5" />
          </div>
        </div>
        
        <div className="pt-4 space-y-4">
          {/* Tech stack Skeleton */}
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-4 w-12 rounded-md bg-surface-container" />
            <Skeleton className="h-4 w-16 rounded-md bg-surface-container" />
            <Skeleton className="h-4 w-14 rounded-md bg-surface-container" />
          </div>
          
          {/* Buttons Skeleton */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
