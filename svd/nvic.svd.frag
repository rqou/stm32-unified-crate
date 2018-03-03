<peripheral>
  <name>NVIC</name>
  <description>Nested Vectored Interrupt
  Controller</description>
  <groupName>NVIC</groupName>
  <baseAddress>0xE000E000</baseAddress>
  <addressBlock>
    <offset>0x0</offset>
    <size>0x1001</size>
    <usage>registers</usage>
  </addressBlock>
  <addressBlock>
    <offset>0x1001</offset>
    <size>0xFFFFF3FF</size>
    <usage>reserved</usage>
  </addressBlock>
  <registers>
    <register>
      <name>ICTR</name>
      <displayName>ICTR</displayName>
      <description>Interrupt Controller Type
      Register</description>
      <addressOffset>0x4</addressOffset>
      <size>0x20</size>
      <access>read-only</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>INTLINESNUM</name>
          <description>Total number of interrupt lines in
          groups</description>
          <bitOffset>0</bitOffset>
          <bitWidth>4</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>STIR</name>
      <displayName>STIR</displayName>
      <description>Software Triggered Interrupt
      Register</description>
      <addressOffset>0xF00</addressOffset>
      <size>0x20</size>
      <access>write-only</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>INTID</name>
          <description>interrupt to be triggered</description>
          <bitOffset>0</bitOffset>
          <bitWidth>9</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ISER0</name>
      <displayName>ISER0</displayName>
      <description>Interrupt Set-Enable Register</description>
      <addressOffset>0x100</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>SETENA</name>
          <description>SETENA</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ISER1</name>
      <displayName>ISER1</displayName>
      <description>Interrupt Set-Enable Register</description>
      <addressOffset>0x104</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>SETENA</name>
          <description>SETENA</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ISER2</name>
      <displayName>ISER2</displayName>
      <description>Interrupt Set-Enable Register</description>
      <addressOffset>0x108</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>SETENA</name>
          <description>SETENA</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ICER0</name>
      <displayName>ICER0</displayName>
      <description>Interrupt Clear-Enable
      Register</description>
      <addressOffset>0x180</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>CLRENA</name>
          <description>CLRENA</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ICER1</name>
      <displayName>ICER1</displayName>
      <description>Interrupt Clear-Enable
      Register</description>
      <addressOffset>0x184</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>CLRENA</name>
          <description>CLRENA</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ICER2</name>
      <displayName>ICER2</displayName>
      <description>Interrupt Clear-Enable
      Register</description>
      <addressOffset>0x188</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>CLRENA</name>
          <description>CLRENA</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ISPR0</name>
      <displayName>ISPR0</displayName>
      <description>Interrupt Set-Pending Register</description>
      <addressOffset>0x200</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>SETPEND</name>
          <description>SETPEND</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ISPR1</name>
      <displayName>ISPR1</displayName>
      <description>Interrupt Set-Pending Register</description>
      <addressOffset>0x204</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>SETPEND</name>
          <description>SETPEND</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ISPR2</name>
      <displayName>ISPR2</displayName>
      <description>Interrupt Set-Pending Register</description>
      <addressOffset>0x208</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>SETPEND</name>
          <description>SETPEND</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ICPR0</name>
      <displayName>ICPR0</displayName>
      <description>Interrupt Clear-Pending
      Register</description>
      <addressOffset>0x280</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>CLRPEND</name>
          <description>CLRPEND</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ICPR1</name>
      <displayName>ICPR1</displayName>
      <description>Interrupt Clear-Pending
      Register</description>
      <addressOffset>0x284</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>CLRPEND</name>
          <description>CLRPEND</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>ICPR2</name>
      <displayName>ICPR2</displayName>
      <description>Interrupt Clear-Pending
      Register</description>
      <addressOffset>0x288</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>CLRPEND</name>
          <description>CLRPEND</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IABR0</name>
      <displayName>IABR0</displayName>
      <description>Interrupt Active Bit Register</description>
      <addressOffset>0x300</addressOffset>
      <size>0x20</size>
      <access>read-only</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>ACTIVE</name>
          <description>ACTIVE</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IABR1</name>
      <displayName>IABR1</displayName>
      <description>Interrupt Active Bit Register</description>
      <addressOffset>0x304</addressOffset>
      <size>0x20</size>
      <access>read-only</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>ACTIVE</name>
          <description>ACTIVE</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IABR2</name>
      <displayName>IABR2</displayName>
      <description>Interrupt Active Bit Register</description>
      <addressOffset>0x308</addressOffset>
      <size>0x20</size>
      <access>read-only</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>ACTIVE</name>
          <description>ACTIVE</description>
          <bitOffset>0</bitOffset>
          <bitWidth>32</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR0</name>
      <displayName>IPR0</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x400</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR1</name>
      <displayName>IPR1</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x404</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR2</name>
      <displayName>IPR2</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x408</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR3</name>
      <displayName>IPR3</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x40C</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR4</name>
      <displayName>IPR4</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x410</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR5</name>
      <displayName>IPR5</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x414</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR6</name>
      <displayName>IPR6</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x418</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR7</name>
      <displayName>IPR7</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x41C</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR8</name>
      <displayName>IPR8</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x420</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR9</name>
      <displayName>IPR9</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x424</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR10</name>
      <displayName>IPR10</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x428</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR11</name>
      <displayName>IPR11</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x42C</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR12</name>
      <displayName>IPR12</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x430</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR13</name>
      <displayName>IPR13</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x434</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR14</name>
      <displayName>IPR14</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x438</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR15</name>
      <displayName>IPR15</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x43C</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR16</name>
      <displayName>IPR16</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x440</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR17</name>
      <displayName>IPR17</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x444</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR18</name>
      <displayName>IPR18</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x448</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
    <register>
      <name>IPR19</name>
      <displayName>IPR19</displayName>
      <description>Interrupt Priority Register</description>
      <addressOffset>0x44C</addressOffset>
      <size>0x20</size>
      <access>read-write</access>
      <resetValue>0x00000000</resetValue>
      <fields>
        <field>
          <name>IPR_N0</name>
          <description>IPR_N0</description>
          <bitOffset>0</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N1</name>
          <description>IPR_N1</description>
          <bitOffset>8</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N2</name>
          <description>IPR_N2</description>
          <bitOffset>16</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
        <field>
          <name>IPR_N3</name>
          <description>IPR_N3</description>
          <bitOffset>24</bitOffset>
          <bitWidth>8</bitWidth>
        </field>
      </fields>
    </register>
  </registers>
</peripheral>
