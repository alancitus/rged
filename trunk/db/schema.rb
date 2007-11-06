# This file is autogenerated. Instead of editing this file, please use the
# migrations feature of ActiveRecord to incrementally modify your database, and
# then regenerate this schema definition.

ActiveRecord::Schema.define(:version => 4) do

  create_table "countries", :force => true do |t|
    t.column "name", :string
  end

  create_table "department_versions", :force => true do |t|
    t.column "department_id", :integer
    t.column "country_id",    :integer
    t.column "version_a",     :integer
    t.column "name",          :string
  end

  create_table "departments", :force => true do |t|
    t.column "parent_id",  :integer
    t.column "country_id", :integer
    t.column "version_a",  :integer
    t.column "lft",        :integer
    t.column "rgt",        :integer
    t.column "name",       :string
  end

  create_table "users", :force => true do |t|
    t.column "login",                     :string
    t.column "email",                     :string
    t.column "crypted_password",          :string,   :limit => 40
    t.column "salt",                      :string,   :limit => 40
    t.column "created_at",                :datetime
    t.column "updated_at",                :datetime
    t.column "remember_token",            :string
    t.column "remember_token_expires_at", :datetime
  end

end
